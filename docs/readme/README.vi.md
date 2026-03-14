# KanutsananFX - Ứng dụng AI Agent Giao dịch Forex

## Tổng quan

KanutsananFX là một ứng dụng AI Agent giao dịch Forex tiên tiến, được thiết kế để cung cấp trải nghiệm giao dịch thông minh và hiệu quả. Ứng dụng hỗ trợ cả **iOS và Android** thông qua nền tảng **Expo / React Native**, đảm bảo khả năng tiếp cận rộng rãi và hiệu suất mượt mà trên nhiều thiết bị.

## Các tính năng chính

*   **AI Chat Agent**: Tương tác với một AI Agent thông minh để nhận phân tích thị trường, dự đoán và lời khuyên giao dịch. 
*   **4 Lệnh giao dịch**: Thực hiện các lệnh giao dịch cơ bản như Mua, Bán, Chốt lời (Take Profit) và Cắt lỗ (Stop Loss).
*   **Tích hợp MetaAPI**: Kết nối liền mạch với MetaAPI để truy cập dữ liệu thị trường theo thời gian thực và thực hiện giao dịch.
*   **Hỗ trợ đa LLM**: Tận dụng sức mạnh của nhiều Mô hình Ngôn ngữ Lớn (LLM) để phân tích và ra quyết định tối ưu.
*   **Tùy chỉnh kỹ năng giao dịch**: Cá nhân hóa và điều chỉnh các kỹ năng giao dịch của AI Agent để phù hợp với chiến lược của bạn.
*   **Giao diện người dùng đa ngôn ngữ**: Giao diện trực quan hỗ trợ nhiều ngôn ngữ, mang lại trải nghiệm người dùng toàn cầu.
*   **Sao lưu và Khôi phục**: Dễ dàng sao lưu và khôi phục dữ liệu ứng dụng và cài đặt của bạn.
*   **Thông tin nhà phát triển**: Truy cập thông tin chi tiết về nhà phát triển và các đóng góp.
*   **Hướng dẫn**: Các hướng dẫn toàn diện để giúp bạn bắt đầu và tận dụng tối đa ứng dụng.

## Ngăn xếp công nghệ

Ứng dụng được xây dựng với các công nghệ hiện đại để đảm bảo hiệu suất và khả năng mở rộng:

*   **Framework**: React Native + Expo + TypeScript
*   **Điều hướng**: Expo Router
*   **Quản lý trạng thái**: React Context API
*   **Lưu trữ**: AsyncStorage
*   **Nền tảng**: iOS và Android

## Hỗ trợ đa ngôn ngữ

KanutsananFX tự hào hỗ trợ **42 ngôn ngữ** khác nhau, với khả năng tự động phát hiện ngôn ngữ thiết bị và tùy chọn chọn ngôn ngữ thủ công trong phần Cài đặt. Ngôn ngữ dự phòng mặc định là tiếng Thái.

## Cài đặt

Để thiết lập môi trường phát triển, hãy làm theo các bước sau:

1.  **Clone repository:**
    ```bash
    git clone https://github.com/kanutsanan1988/KanutsananFX.git
    cd KanutsananFX
    ```

2.  **Cài đặt các phụ thuộc:**
    ```bash
    npm install
    # hoặc
    pnpm install
    ```

## Chạy ứng dụng

Để chạy ứng dụng trong môi trường phát triển:

*   **Khởi động máy chủ phát triển Expo:**
    ```bash
    npx expo start
    ```

*   **Chạy trên thiết bị Android:**
    ```bash
    npm run android
    ```

*   **Chạy trên thiết bị iOS:**
    ```bash
    npm run ios
    ```

## Xây dựng cho Android và iOS

### Xây dựng Android

*   **APK xem trước (Preview APK):**
    ```bash
    npm run build:android:apk
    ```

*   **AAB sản xuất (Production AAB):**
    ```bash
    npm run build:android:production
    ```

### Xây dựng iOS

*   **Bản dựng xem trước (Preview build):**
    ```bash
    npm run build:ios
    ```

*   **Bản dựng trình giả lập (Simulator build):**
    ```bash
    npm run build:ios:simulator
    ```

*   **Bản dựng sản xuất (Production build):**
    ```bash
    npm run build:ios:production
    ```

## Cách sử dụng

Sau khi cài đặt và chạy ứng dụng, bạn có thể:

1.  **Đăng nhập** bằng tài khoản MetaAPI của bạn.
2.  **Tương tác với AI Chat Agent** để nhận thông tin chi tiết về thị trường và lời khuyên giao dịch.
3.  **Thực hiện các lệnh giao dịch** trực tiếp từ ứng dụng.
4.  **Tùy chỉnh các cài đặt** và kỹ năng giao dịch của AI Agent.
5.  **Chọn ngôn ngữ** ưa thích của bạn trong phần cài đặt nếu bạn không muốn sử dụng ngôn ngữ tự động phát hiện.

## Tham khảo

*   Kho lưu trữ kỹ năng giao dịch gốc:
    [https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Giấy phép

[Thông tin giấy phép sẽ được thêm vào đây]
