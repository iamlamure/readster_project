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
                                <a class="button is-danger is-rounded" href="">ยกเลิก</a>
                                <a class="button is-warning is-rounded" href="">ชำระเงิน</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>