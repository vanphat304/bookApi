const querySelect = ()=> "select * from SACH"
const queryUpdate = (nxb,madausach,namxb,slt,dongiaban,id)=> "update SACH " + " set NhaXuatBan = " + "'" + nxb + "'," + "MaDauSach = " + madausach + "," + "NamXuatBan = " + namxb + "," + "SoLuongTon = " + slt + "," + "DonGiaBan = " + "'" + dongiaban + "'" + " where MaSach = " + id ;
const queryDelete = (id)=>"delete from SACH where MaSach = " + "'" + id + "'" ;
const queryInsert = (madausach,nhaxb,namxb,soluongton,dongiaban)=> "insert into SACH  values ('" + madausach + "','" + nhaxb + "','" + namxb + "'," + soluongton + "," + dongiaban + ", NEWID()" + ")"

module.exports = {
    querySelect,
    queryUpdate,
    queryInsert,
    queryDelete
}