<template>
    <div class="catalog-item">
           <img
           :src="require('../assets/images/' + product_data.image)"
              class="catalog-item__image" alt="..." data-bs-toggle="modal" data-bs-target="#adam">
           
              <h5 id="3" class="catalog-item__name" data-bs-toggle="modal" data-bs-target="#adam">«{{product_data.name}}»</h5>
              <p class="catalog-item__painter">
                {{product_data.painter}}</p>
              <p class="catalog-item__price">{{product_data.price }} $</p>
              
            <button class="catalog-item__add-to-cart-btn"
            @click="addToCart"
            >
                Купить</button>
  

      <!--Модальные окна-->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">«Рождение Венеры»
                Сандро Боттичелли</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>«Рождение Венеры» — картина итальянского художника тосканской школы Сандро Боттичелли.
                Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время
                хранится в галерее Уффици, Флоренция. Википедия
                Автор: Сандро Боттичелли
                Окончание работы: 1486 г.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" class="btn" >Купить</button>
        </div>
    </div>
    </div>
    </div>

    <div class="modal fade" id="statik" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">«Тайная вечеря»
                Леонардо да Винчи</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>«Та́йная ве́черя» — монументальная роспись работы Леонардо да Винчи, изображающая сцену
                последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском
                монастыре Санта-Мария-делле-Грацие в Милане.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" class="btn">Купить</button>
        </div>
    </div>
    </div>
    </div>

    <div class="modal fade" id="adam" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">«Сотворение Адама»
                Микеланджело</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511
                года.

                Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы,
                посвящённых девяти сюжетам книги Бытия. Фреска иллюстрирует эпизод:

                «Сотворение Адама» — одна из самых выдающихся композиций росписи Сикстинской капеллы. В
                бесконечном пространстве летит Бог-Отец, окружённый бескрылыми ангелами, с реющей белой
                туникой. Правая рука</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" class="btn" >Купить</button>
        </div>
    </div>
    </div>
    </div>

    <div class="modal fade" id="lesen" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">«Урок анатомии»
                            Рембрандт</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Описание картины «Урок анатомии доктора Тульпа»
                            «Урок анатомии доктора Тульпа» – один из самых узнаваемых образов в истории живописи,
                            созданный 25-летним Рембрандтом после переезда из родного Лейдена в Амстердам. Сменить место
                            жительства, завоевав успех в своём городе, было решением во всех отношениях рискованным.
                            Однако тогда это был один из самых богатых и крупных городов Европы, где процветал средний
                            класс – основной заказчик картин.

                            В XVII веке у голландцев пользовались спросом жанровые сцены, натюрморты, пейзажи и гравюры –
                            они были доступными, небольшого размера и их можно было встретить в обычных домах. Масштабные
                            и более сложные по составу групповые портреты также стали популярными в тот период. В
                            основном их размещали в общественных местах для прославления членов тех или иных организаций.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    components: {
        
    },
    props: {
        product_data: {
            type: Object,
            defrult() {
                return{}
            }
        }
    },
    data() {
        return {
            
        }
    },
    computed:{},
    methods:{
        addToCart() {
            this.$emit('addToCart', this.product_data);
        }
    },
    watch:{},
    mounted(){
           // this.$set(this.product_data, 'quantity', 1)
        //не работает
    }
}
</script>

<style lang="css">
.catalog-item {
    justify-content: center;border: 1px solid #E1E1E1;
    border-radius: 5px;
}
.catalog-item:last-child {
    background-color: #ccc;
   }
.catalog-item__image {
    max-width: 280px;
    height: 160px;
   }
.catalog-item__painter,
.catalog-item__name {
    margin-top: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #343030;
}
.catalog-item__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #343030;
}
.catalog-item__add-to-cart-btn {
    margin-bottom: 30px;
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
.catalog-item__add-to-cart-btn:hover {
    background: #776763;
    color: #fff; 
}

.catalog-item__add-to-cart-btn:focus {
    border: #776763;
    box-shadow: 1px 1px 5px 1px #776763;
}

.btn-box {
    display: none;
}

</style>