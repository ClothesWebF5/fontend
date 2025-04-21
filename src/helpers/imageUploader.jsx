import { useEffect, useRef } from "react";
import { FileUploadWithPreview } from "file-upload-with-preview";

function ImageUploader({ onFilesSelected, resetTrigger }) {
    const uploadRef = useRef(null);
    const uploadId = "my-unique-id";

    useEffect(() => {
        if (!uploadRef.current) {
            uploadRef.current = new FileUploadWithPreview(uploadId, {
                maxFileCount: 12,
                multiple: true,
                text: {
                    chooseFile: "Chọn ảnh...",
                    browse: "Tải ảnh lên",
                    selectedCount: "Ảnh được chọn",
                    label: "📸 Hình ảnh sản phẩm"
                },
                showDeleteButtonOnImages: true,
                acceptedFileTypes: ["image/jpeg", "image/png", "image/webp"]
            });

            const fileInput = document.querySelector(
                '.custom-file-container input[type="file"]'
            );

            if (fileInput) {
                fileInput.setAttribute("accept", "image/*");

                fileInput.addEventListener("change", () => {
                    const files = uploadRef.current.cachedFileArray || [];
                    onFilesSelected(files);
                });
            }
        }

        // Cleanup không cần thiết ở đây nếu không destroy instance
    }, [onFilesSelected]);

    // ✅ Reset lại khi resetTrigger thay đổi
    useEffect(() => {
        if (uploadRef.current) {
            uploadRef.current.resetPreviewPanel(); // 💥 dùng cái này thay vì `.reset()`
        }
    }, [resetTrigger]);

    return (
        <div className="custom-file-container" data-upload-id={uploadId}></div>
    );
}

export default ImageUploader;
