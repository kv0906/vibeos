# WORKFLOW.md — Vòng Đời Project

> Cách project được sinh ra, xây dựng, và ship.

---

## Luồng Chính

```
PROMPT → LÀM RÕ → HIỂU → TẠO → BUILD → LẶP LẠI
```

---

## Các Loại Project

Không phải project nào cũng giống nhau. Nhận diện loại trước:

| Loại | Là gì | Files Cần |
|------|-------|-----------|
| **Build** | Software, web app, vibe coding | PROBLEM → PRD → TECH_SPEC → NOTES |
| **Research** | Phân tích, docs, PDF, hành vi người dùng | PROBLEM → NOTES |
| **Create** | Content, viết lách, design assets | PROBLEM → NOTES |

**Quy tắc:** Chỉ project **Build** cần TECH_SPEC.md. Đừng over-engineer.

---

## Khởi Tạo Project

### Câu Hỏi Mở Đầu

> "Bạn đang giải quyết vấn đề gì?"

Câu hỏi tiếp theo nếu cần:
- "Ai cảm nhận pain này?"
- "Thành công trông như thế nào?"

### Các Mode Ý Định

| Mode | Tín Hiệu | Cách Tiếp Cận |
|------|----------|---------------|
| **Solve** | Vấn đề rõ ràng, pain cụ thể | Problem-first, ship nhanh |
| **Explore** | Tò mò, "nếu như" | Prototype-first, khám phá scope |
| **Learn** | Xây dựng kỹ năng | Build để học, docs như notes |

---

## Cấu Trúc Project

### Build Projects (Software/Apps)

```
projects/{name}/
├── PROBLEM.md     ← Neo tầm nhìn (luôn có)
├── PRD.md         ← What/why/how, user stories
├── TECH_SPEC.md   ← Stack, architecture
└── NOTES.md       ← Quyết định, tiến độ
```

### Research Projects (Phân Tích/Docs)

```
projects/{name}/
├── PROBLEM.md     ← Chúng ta đang nghiên cứu gì?
└── NOTES.md       ← Phát hiện, insights, quyết định
```

### Create Projects (Content/Design)

```
projects/{name}/
├── PROBLEM.md     ← Chúng ta đang tạo gì?
└── NOTES.md       ← Bản nháp, iterations, quyết định
```

---

## Template PROBLEM.md

```markdown
# {Tên Project}

## Vấn Đề
**Vấn đề là gì?**
[Một câu. Rõ ràng.]

**Ai cảm nhận nó?**
[Người cụ thể]

**Họ đang đối phó như thế nào?**
[Cách xử lý hiện tại]

## Ý Định
**Loại:** Build / Research / Create
**Mode:** Solve / Explore / Learn
**Thành công trông như:** [Ý nghĩa của "xong"]

---
*Trạng thái: Active*
```

---

## Template PRD.md (Chỉ Build Projects)

```markdown
# {Tên Feature/Project}

## Tại Sao
[Một câu: tại sao điều này quan trọng]

## Cái Gì
[Chúng ta đang build cái gì — góc nhìn người dùng]

## User Stories
- Với tư cách [user], tôi muốn [hành động], để [kết quả]

## Phạm Vi
**Trong:** [danh sách]
**Ngoài:** [danh sách]

## Luồng
[User journey trong một dòng]

## Wireframe
[ASCII diagram — hình dung UI/cấu trúc]

---
*Trạng thái: Draft / In Progress / Done*
```

---

## Template TECH_SPEC.md (Chỉ Build Projects)

```markdown
# {Tên Feature/Project} — Tech Spec

## Stack
- Frontend: [x]
- Backend: [x]
- Database: [x]

## Architecture
[ASCII diagram hoặc mô tả ngắn]

## Quyết Định Quan Trọng
| Quyết Định | Lựa Chọn | Tại Sao |

## Ghi Chú Triển Khai
[Bất cứ điều gì engineer cần biết]

---
*Trạng thái: Draft / In Progress / Done*
```

---

## Template NOTES.md (Tất Cả Projects)

```markdown
# Notes — {Tên Project}

## Nhật Ký Bàn Giao

| Ngày | Tóm Tắt Phiên | Quyết Định Đã Làm | Hành Động Tiếp |
|------|---------------|-------------------|----------------|
| 2024-01-15 09:00 | Bắt đầu research, review 3 papers | Tập trung vào hành vi người dùng | Tóm tắt phát hiện |
| 2024-01-15 14:30 | Hoàn thành phân tích, viết tóm tắt | Sử dụng framework X | Draft khuyến nghị |
| ... | ... | ... | ... |

## Phát Hiện / Insights Quan Trọng
- [Phát hiện 1]
- [Phát hiện 2]

## Câu Hỏi Mở
- [Câu hỏi cần giải quyết]

## Lưu Trữ Quyết Định
- **[Ngày]** Quyết định X vì Y
```

---

## Quy Tắc Bàn Giao Phiên

**Cuối mỗi phiên làm việc, luôn:**

1. Tóm tắt những gì đã làm
2. Ghi lại quyết định đã đưa ra
3. Ghi chú việc tiếp theo
4. Thêm dòng vào bảng bàn giao NOTES.md với **timestamp** (YYYY-MM-DD HH:MM)

Nhắc người dùng: *"Bạn có muốn tôi thêm tóm tắt bàn giao vào NOTES.md trước khi kết thúc không?"*

**Định dạng timestamp:** `2024-12-15 14:30` — ngày + giờ để theo dõi phiên chính xác.

---

## Tham Khảo Nhanh

**Bắt đầu project:**
```
1. "Bạn đang giải quyết vấn đề gì?"
2. Nhận diện loại: Build / Research / Create
3. Tạo projects/{name}/PROBLEM.md
4. Thêm files dựa trên loại
```

**Tiếp tục project:**
```
1. Đọc PROBLEM.md (tầm nhìn)
2. Đọc bảng bàn giao NOTES.md (nơi chúng ta dừng lại)
3. Tiếp tục từ "Hành Động Tiếp" cuối cùng
```

**Kết thúc phiên:**
```
1. Tóm tắt tiến độ
2. Thêm dòng bàn giao vào NOTES.md
3. Làm rõ hành động tiếp theo
```

---

*Projects là phương tiện để học hỏi. Code chỉ là sản phẩm phụ.*
