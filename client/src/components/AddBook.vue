<template>
<div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มหนังสือ</h1>
        <form>
            <div class="container">
                <div>
                    <input type="text" class="form-control" placeholder="ชื่อหนังสือ">
                    <input type="text" class="form-control" placeholder="ผู้เขียน">
                    <div class="form-group">         
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">รายละเอียด/เนื้อเรื่องย่อ</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <!-- Vue IF dropdown-->
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <!-- Vue IF dropdown-->
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>SE-ED</option>
                            <option>แสงดาว</option>
                            <option>นายอินทร์</option>
                            <option>สยามดรีม</option>
                            <option>ป๊อป</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                            <!-- Vue IF dropdown-->
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option>เลือกหมวดหมู่</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" placeholder="ราคา">
                        </div>
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" placeholder="น้ำหนัก">
                        </div>
                        <div class="form-group col-md-2">
                            <input type="text" class="form-control" placeholder="จำนวนหน้า">
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">บันทึก</button>
            </div>
        </form>
        </div>
    </div>
</template>