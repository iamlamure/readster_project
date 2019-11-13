<template>
    <div class="container">
        <h1 class="title is-1">จัดการการขาย</h1>
        <div class="columns">
            <div class="column">
                <div class="notification is-primary">
                    <h3 class="title is-3">รอแจ้งโอนเงิน</h3>
                    <h5 class="title is-5">จำนวน: 1   รายการ</h5>
                </div>
            </div>
            <div class="column">
                <div class="notification is-info">
                    <h3 class="title is-3">โอนเงินเรียบร้อย</h3>
                    <h5 class="title is-5">จำนวน: 0  รายการ</h5>
                </div> 
            </div>
            <div class="column">
                <div class="notification is-link">
                    <h3 class="title is-3">อยู่ระหว่างจัดส่ง</h3>
                    <h5 class="title is-5">จำนวน: 0   รายการ</h5>
                </div> 
            </div>
            <div class="column">
                <div class="notification is-success">
                    <h3 class="title is-3">ได้รับแล้ว</h3>
                    <h5 class="title is-5">จำนวน: 0  รายการ</h5>
                </div>
            </div>
        </div>
        <hr class="style11">
        <h2 class="title is-2">รายการ</h2>
        <hr class="style11">
        <table class="table is-fullwidth">
            <thead class="title is-4">
                <th>สินค้า</th>
                <th></th>
                <th></th>
                <th>ยอดทั้งหมด</th>
                <th>สถานะ</th>
                <th>การจัดส่ง</th>
                <th>สลิป</th>
                <th>คำสั่ง</th>
                <th>แจ้งเลขพัสดุ</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <figure class="image is-64x64">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/7/4/74238125_463268774542092_2482475965918216192_n.jpg" alt="Image">
                        </figure>
                    </td>
                    <td></td>
                    <td>เกร็ดความคิดบนก้าววิ่ง (พิมพ์ครั้งที่ 4)</td>
                    <td>900</td>
                    <td>รอแจ้งโอนเงิน</td>
                    <td>ไปรษณีย์ - EMS</td>
                    <td>รออัพโหลด</td>
                    <td>
                        <a class="button is-danger is-rounded is-small" href="">ยกเลิก</a>
                        <a class="button is-success is-rounded is-small" href="">จัดส่งแล้ว</a>
                    </td>
                    <td>
                        <input class="input is-rounded is-small " type="text">
                        <a class="button is-warning is-fullwidth is-rounded is-small" href="">update</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    
}
</script>