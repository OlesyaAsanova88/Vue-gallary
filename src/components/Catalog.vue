<template>
    <div class="catalog">
        <header class="header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="container-fluid">
                  <a class="navbar-brand" href="#">ГАЛЕРЕЯ</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                     aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <a class="nav-link active" aria-current="page" href="#">Каталог</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Доставка</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Оплата</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Контакты
                           </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="#">Телефоны</a></li>
                              <li><a class="dropdown-item" href="#">Почта</a></li>
                              <li>
                                 <hr class="dropdown-divider">
                              </li>
                              <li><a class="dropdown-item" href="#">Соцсети</a></li>
                           </ul>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ">О компании</a>
                        </li>
                     </ul>
                     <form class="d-flex">
                        
                        <input 
                        v-model="serchValue"
                        class="form-control me-2" 
                        type="search" 
                        placeholder="Поиск по названию картины"
                           aria-label="Search"
                           >
                        <button 
                        class="btn-serch"
                        @click="search(serchValue)"
                        >
                        Найти</button>
                     </form>
                  </div>
               </div>
            </nav>
   
            <div class="hr"></div>
   
         </header>

         <div class="row">
            <div class="col-12">
               <h2>Картины эпохи Возрождения</h2>
            </div>
         </div>
        
        <div class="catalog-list">
            <catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
         ></catalog-item>
        </div>
    </div>

    <footer class="footer">
        <div class="row">
           <div class="col-12">
              <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                 <div class="container-fluid">
                    <div class="d-sm-flex text-center m-auto">
                       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                             <a class="nav-link" aria-current="page" href="#">Каталог</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" aria-current="page" href="#">Доставка</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="#">Оплата</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="#">Контакты</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="#">О компании</a>
                          </li>
                       </ul>
                       <span class="navbar-text">
                          <i class="bi bi-telephone-fill"></i>
                          +7(812)555-55-55
                       </span>
                       <span class="navbar-text">
                          <i class="bi bi-geo-alt-fill"></i>
                          г. Санкт-Петербург, ул. Ефимова,3
                       </span>
                    </div>
                 </div>
              </nav>
           </div>
        </div>
     </footer>
</template>

<script>
    import CatalogItem from './CatalogItem.vue';
    
    import { mapActions, mapGetters } from 'vuex';
    

export default {
    name: 'Catalog',
    components: {
        CatalogItem  
    },
    props: {

    },
    data() {
        return {
         sortedProducts: [],
         minPrice: 0,
         maxPrice: 5000000,
         messages: [],
         serchValue: ''
        }      
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE'
        ])
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART',
            'GET_SEARCH_VALUE_TO_VUEX'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
            
        },
        search(value) {
         this.GET_SEARCH_VALUE_TO_VUEX(value)
        },
        sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch:{
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data) {
               this.sortProductsBySearchValue(this.SEARCH_VALUE)
            }
        })
    }
}
</script>

<style scoped >
   .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
   }
   .catalog-link-to-cart {
        position: fixed;
        top: 15px;
        right: 10px;
        padding: 16px;
        border: solid 1px #aeaeae;
        background: #ffffff;
   }
   .btn-serch{
    min-width: 118px;
    max-height: 48px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 150%;
    font-weight: bold;
    align-items: center;
    background: #403432;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
   }
   .btn-serch:hover {
    background: #776763;
    color: #fff;
   }
   .btn-serch:focus {
    border: #776763;
    box-shadow: 1px 1px 5px 1px #776763;
   }
   h2 {
    margin-top: 45px;
    margin-bottom: 30px;
    color: #343030;
    text-align: left;
    font-weight: bold;
    font-size: 24px;
 }
 .footer {
   margin-top: 45px;
}
.bi {
   margin-left: 15px;
}

</style>