# Quản lý quân số trực ban Đội 7

PWA ngoại tuyến riêng cho Đội 7, kế thừa giao diện bốn tab của tệp HTML tham chiếu: **Điểm danh, Báo cáo, Lịch sử, Cài đặt**. Thiết kế xanh đậm được giữ nguyên.

## Chức năng

- Điểm danh độc lập theo Sáng, Chiều, Tối và bản dự kiến Sáng ngày tiếp theo.
- Chọn cán bộ vắng bằng checkbox; tên đã chọn ở nhóm trên tự ẩn khỏi nhóm dưới. Số lượng vắng tự đếm theo tên đã tích.
- Riêng Nghỉ ngoài giờ và Nghỉ chế độ có ô nhập nhanh số người nghỉ; các nhóm khác vẫn chọn tên.
- Chép dữ liệu ca trước để chỉ sửa các thay đổi; chiều lấy sáng cùng ngày, ca Tối lấy ca Tối đã lưu gần nhất ở ngày trước đó, dự kiến sáng mai lấy sáng cùng ngày, sáng hôm sau lấy dự kiến sáng hôm trước.
- Tìm nhanh tên theo dấu hoặc không dấu; danh sách lọc ngay khi gõ.
- Bố cục điện thoại xếp dọc, bộ đếm và checkbox có vùng chạm lớn hơn.
- Danh sách Chỉ huy trực và Trực ban được nạp lại sau khi dữ liệu đã lưu tải xong.
- Danh mục nhóm vắng bắt đầu trống; người dùng tự thêm, sửa hoặc xóa nhóm.
- Nạp danh sách cán bộ hàng loạt từ CSV/TXT hoặc dán nhiều tên; thêm, sửa, xóa từng người. Tên trùng được gộp.
- Dữ liệu số lượng nhập từ phiên bản cũ vẫn được giữ nếu chưa chuyển nhóm sang chọn tên.
- Bảy ô Chỉ huy trực và mười ô Trực ban có thể chỉnh sửa.
- Tính tổng vắng/có mặt, cảnh báo khi số liệu không khớp.
- Xem báo cáo gửi Zalo, sao chép văn bản, lưu lịch sử, xuất hoặc chia sẻ ảnh PNG chi tiết.
- Ngày trên màn hình, báo cáo, lịch sử và tên tệp hiển thị theo định dạng dd/mm/yyyy; dữ liệu lưu bên trong vẫn dùng chuẩn ISO để giữ tương thích.
- Xuất và phục hồi bản sao lưu JSON.
- IndexedDB là nơi lưu chính, localStorage được dùng làm bản dự phòng; service worker lưu giao diện để dùng ngoại tuyến.

### Nạp danh sách cán bộ

Trong **Cài đặt > Danh sách cán bộ**, chọn **Nạp danh sách** rồi tải tệp `.txt`/`.csv` hoặc dán danh sách. Mỗi dòng là một tên; tệp CSV lấy cột đầu tiên. Chọn **Thêm vào danh sách** để giữ các tên đang có, hoặc **Thay toàn bộ danh sách** để thay danh mục. Tệp Excel `.xlsx` cần lưu thành CSV/TXT trước khi nạp.

## Riêng tư

Dữ liệu điểm danh chỉ lưu trên thiết bị/trình duyệt đang sử dụng. Repository chỉ chứa mã và không chứa dữ liệu cá nhân hay dữ liệu nghiệp vụ. Không có máy chủ, đăng nhập, đồng bộ hoặc mã hóa dữ liệu. Hãy bảo vệ thiết bị và giữ bản sao lưu ở nơi an toàn; không đưa dữ liệu thật lên GitHub.

## Dùng PWA

Phục vụ thư mục `www` qua HTTPS (GitHub Pages đáp ứng điều kiện này), mở đường dẫn trên điện thoại và dùng chức năng thêm vào màn hình chính của trình duyệt. Mở lần đầu khi có kết nối để lưu tệp ứng dụng ngoại tuyến.

## Tạo APK Android

Cần Node.js/npm, JDK 17 và Android SDK (Android Studio cài đặt SDK/Build Tools). Từ thư mục dự án:

```sh
npm install
npm run android:add
npm run android:sync
npm run android:open
```

Trong Android Studio chọn **Build > Build Bundle(s) / APK(s) > Build APK(s)**. APK debug thường nằm tại `android/app/build/outputs/apk/debug/app-debug.apk`. Lệnh dòng lệnh tương đương (sau khi thêm Android platform):

```sh
cd android
./gradlew assembleDebug
```

Windows dùng `gradlew.bat assembleDebug`. Ký APK phát hành cần cấu hình khóa ký riêng; không commit khóa hoặc dữ liệu thật vào repository. Bản này hiện chưa đóng gói APK. Điện thoại có thể sử dụng PWA qua GitHub Pages; các bước tạo APK được ghi ở trên nếu sau này cần.

## GitHub Pages

Workflow `.github/workflows/pages.yml` tự xuất bản thư mục `www` sau mỗi lần đẩy lên `main`. Trong repository, đặt **Settings > Pages > Build and deployment > Source** thành **GitHub Actions**. Khi triển khai, dùng repository riêng cho Đội 7 và bật **GitHub Actions** trong Settings > Pages. Địa chỉ Pages sẽ theo tên repository mới; không dùng chung địa chỉ của bản gốc.

## Cấu trúc

- `www/`: ứng dụng PWA và tài nguyên ngoại tuyến.
- `capacitor.config.ts`, `package.json`: cấu hình Capacitor để tạo Android wrapper.
- `.github/workflows/pages.yml`: xuất bản GitHub Pages.

## Dữ liệu riêng cho Đội 7

Ứng dụng Đội 7 dùng kho lưu trữ riêng trên thiết bị, không tự lấy dữ liệu hay lịch sử của bản gốc. Nếu nhập tệp sao lưu Quanso, các ngày và danh sách cán bộ có thể được phục hồi; ứng dụng tự mở rộng danh sách Chỉ huy trực lên 7 ô và Trực ban lên 10 ô. Dữ liệu mới bắt đầu trống để tránh dùng nhầm dữ liệu nghiệp vụ.
