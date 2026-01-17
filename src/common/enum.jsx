export const CCategory = {
  CongNgheLapTrinh: 1,
  KyNangGiaoTiep: 2,
  KinhdoanhMarketing: 3,
  thietKeSangTao: 4,
  amNhacNgheThuat: 5,
  sucKhoeDoiSong: 6,
  phatTrienCaNhan: 7,

  get text() {
    return {
      // [CCategory.CongNgheLapTrinh]: "abcd",
      [CCategory.CongNgheLapTrinh]: "Công nghệ lập trình",
      [CCategory.KyNangGiaoTiep]: "Kỹ năng giao tiếp",
      [CCategory.KinhdoanhMarketing]: "Kinh doanh & Marketing",
      [CCategory.thietKeSangTao]: "Thiết kế & Sáng tạo",
      [CCategory.amNhacNgheThuat]: "Âm nhạc & Nghệ thuật",
      [CCategory.sucKhoeDoiSong]: "Sức khỏe & Đời sống",
      [CCategory.phatTrienCaNhan]: "Phát triển cá nhân",
    };
  },
};
