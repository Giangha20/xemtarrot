export type TuViGender = 'nam' | 'nu';
export type TuViCalendarType = 'duong_lich' | 'am_lich';

export interface TuViInput {
  hoTen: string;
  gioiTinh: TuViGender;
  ngaySinh: number;
  thangSinh: number;
  namSinh: number;
  gioSinhChi: string; // 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
  gioSinhGio: string; // e.g. "23h00 - 00h59"
  namXem: number;
  loaiLich: TuViCalendarType;
}

export interface TuViStar {
  name: string;
  type: 'chinh_tinh' | 'cat_tinh' | 'hung_tinh' | 'phu_tinh';
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  brightness?: 'Miếu' | 'Vượng' | 'Đắc' | 'Hãm' | 'Bình';
  meaningVi: string;
}

export interface TuViPalace {
  id: string; // 'menh', 'phu_mau', 'phuc_duc', etc.
  nameVi: string; // 'Mệnh', 'Phụ Mẫu', 'Phúc Đức', etc.
  chiIndex: number; // 0: Tý -> 11: Hợi
  chiNameVi: string; // 'Tý', 'Sửu', ...
  canNameVi: string; // 'Giáp', 'Ất', ...
  isMenhCung: boolean;
  isThanCung: boolean;
  chinhTinh: TuViStar[];
  phuTinh: TuViStar[];
  daiHan: number;
  tieuHan: string;
  rating: 'Đại Cát' | 'Cát' | 'Bình Hòa' | 'Thứ Cát' | 'Cần Thận Trọng';
  summary: string;
  detailedAnalysis: string;
  advice: string;
}

export interface TuViChartResult {
  id: string;
  timestamp: number;
  input: TuViInput;
  profile: {
    hoTen: string;
    gioiTinhVi: string;
    duongLichDisplay: string;
    amLichDisplay: string;
    canChiNam: string;
    canChiThang: string;
    canChiNgay: string;
    canChiGio: string;
    menhNapAm: string;
    menhElement: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
    cucNameVi: string;
    cucNumber: number;
    chuMenh: string;
    chuThan: string;
    amDuongMenh: string; // "Âm Nam Thuận Lý", "Dương Nữ Nghịch Lý", etc.
    menhCucTuongQuan: string; // "Cục sinh Mệnh", "Mệnh Cục tỷ hòa", etc.
    cungMenhChi: string; // Vị trí cung Mệnh tại Tý, Sửu...
    cungThanChi: string; // Vị trí cung Thân tại Tý, Sửu...
    namXemHan: number;
  };
  palaces: TuViPalace[]; // 12 palaces in standard order
  fullInterpretation: {
    tongQuanBanMenh: string;
    tinhCachCotCach: string;
    congDanhSuNghiep: string;
    taiLocTienBac: string;
    tinhDuyenGiaDao: string;
    sucKhoeTatAch: string;
    phucDucToTien: string;
    xuatHanhXaHoi: string;
    dienTrachNhaCua: string;
    vanHanNamNay: string; // Hạn năm 2026 (Bính Ngọ) hoặc năm đã chọn
    loiKhuyenPhongThuy: string;
  };
}
