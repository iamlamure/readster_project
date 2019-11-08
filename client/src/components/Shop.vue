<template>
    <div class="container">
        <h1 class="title columns is-mobile is-centered">รายการสินค้าทั้งหมด</h1>
        <br>
        <div class="columns is-centered">
        <div class="column is-half ">
          <p class="bd-notification is-primary">
            <input class="input is-rounded" type="text" placeholder="สินค้าที่ต้องการ">
          </p>
        </div>
      </div>
        <hr class="style11">
        <br>
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <h4 class="title is-4"> สินค้ามาใหม่วันนี้ </h4>
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                            <div class="tile is-child box">
                                <div class="card-image has-text-centered">
                                    <figure class="image is-inline-block">
                                        <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                                    </figure>
                                </div>
                                <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                                <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <section>
        <hr class="style11">
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <h4 class="title is-4"> สินค้าที่ถูกรีวิวมากที่สุด </h4>
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                            <div class="tile is-child box">
                                <div class="card-image has-text-centered">
                                    <figure class="image is-inline-block">
                                        <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                                    </figure>
                                </div>
                                <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                                <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>