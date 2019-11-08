<template>
    <div class="container">
        <h1 class="title columns is-mobile is-centered">ตะกร้าสินค้า</h1>
        <!--<h1 class="title columns is-mobile is-centered">{{ Carts.length }}</h1> -->
        <hr class="style11">
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <table class="table is-fullwidth">
                    <thead>
                        <th>สินค้า</th>
                        <th></th>
                        <th>ราคาต่อชิ้น</th>
                        <th>จำนวน</th>
                        <th>ค่าจัดส่ง</th>
                        <th>ราคารวม</th>
                        <th>action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>product_img</td>
                            <td>product_name</td>
                            <td>1900</td>
                            <td>1</td>
                            <td>60</td>
                            <td>1900</td>
                            <td>
                                <a class="button is-danger is-small is-rounded" href="">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <section>
        <hr class="style11">
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <div class="contianer">
                    <h5 class="title is-5">เลือกที่อยู่ในการจัดส่ง</h5>
                    <div class="select is-fullwidth">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <hr class="style11">
                    <button class="button is-primary title is-5 is-pulled-right">สั่งซื้อสินค้า</button>
                    <h4 class="title is-4">รวมค่าสินค้า(2 ชิ้น) : ทั้งหมด 1900 บาท</h4>
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