# skinx-patient-to-tests

## Project Description

## Installation

### Prerequisites
- Node.js >= 14.x
- npm >= 6.x
- Start appium
- Start emulator android

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/Mutto1003/skinx-patient-to-tests.git
    ```
2. Navigate to the project directory:
    ```bash
    cd skinx-patient-to-tests
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start run test:
    ```bash
    npm run app or  npm run api
    ```

## Usage
- 

## Project Structure
- **apk/**: ไฟล์ APK ที่ใช้สำหรับการทดสอบแอปพลิเคชัน
- **fixtures/**: ข้อมูลทดสอบที่สามารถใช้งานซ้ำได้ในหลายสถานการณ์
- **locales/**: การจัดการการแสดงผลหลายภาษา เช่น ภาษาไทยและภาษาอังกฤษ
- **output/**: เก็บผลลัพธ์ที่ได้จากการทดสอบต่างๆ
- **pages/**: สคริปต์ที่ใช้สำหรับทดสอบหน้าต่างๆ ใน UI ของแอป
- **services/**: ลอจิกที่เกี่ยวกับการเรียก API หรือฟังก์ชันการทำงาน
- **tests/**: โฟลเดอร์สำหรับเก็บไฟล์ทดสอบ ทั้งในส่วนของ UI และ API
- **.gitignore**: ไฟล์ที่บอก Git ว่าควรเพิกเฉยไฟล์หรือโฟลเดอร์ใดบ้าง
- **codecept.conf.ts**: การตั้งค่าสำหรับการทดสอบด้วย CodeceptJS
- **package.json** และ **package-lock.json**: ข้อมูลเกี่ยวกับ dependencies และสคริปต์ของโปรเจกต์
- **tsconfig.json**: การตั้งค่าที่เกี่ยวกับ TypeScript
- **README.md**: เอกสารประกอบโปรเจกต์ที่อธิบายวิธีการใช้งานและโครงสร้างต่างๆ

<!-- skinx-patient-to-tests/
│
├── apk/                        # ไฟล์ APK สำหรับการทดสอบแอปพลิเคชัน
│   └── app-alpha-release.apk   # ไฟล์ APK ที่ใช้สำหรับการทดสอบ release
│
├── fixtures/                   # ข้อมูลการทดสอบที่ใช้ซ้ำได้ (test data)
│   └── common.json             # ข้อมูลทดสอบทั่วไปในรูปแบบ JSON
│
├── locales/                    # การตั้งค่าสำหรับการรองรับหลายภาษาในโปรเจกต์
│   ├── th.ts                   # ไฟล์การตั้งค่าภาษาไทย
│   └── en.ts                   # ไฟล์การตั้งค่าภาษาอังกฤษ
│
├── output/                     # โฟลเดอร์เก็บผลลัพธ์จากการทดสอบ
│
├── pages/                      # หน้าสำหรับการทดสอบ UI
│   ├── login.ts                # สคริปต์สำหรับทดสอบหน้าล็อกอิน
│   └── register.ts             # สคริปต์สำหรับทดสอบหน้าลงทะเบียน
│
├── services/                   # ลอจิกการจัดการ API
│   └── example.ts              # ตัวอย่างของการเรียกใช้ API หรือการประมวลผล
│
├── tests/                      # โฟลเดอร์สำหรับการทดสอบโปรเจกต์
│   ├── ui/                     # ทดสอบที่เกี่ยวข้องกับส่วนติดต่อผู้ใช้ (UI)
│   │   ├── login_test.ts       # การทดสอบ UI สำหรับหน้าล็อกอิน
│   │   └── register_test.ts    # การทดสอบ UI สำหรับหน้าลงทะเบียน
│   └── api/                    # การทดสอบที่เกี่ยวข้องกับ API
│       └── example_test.ts     # การทดสอบ API ตัวอย่าง
│
├── .gitignore                  # ระบุไฟล์หรือโฟลเดอร์ที่ไม่ต้องการให้ติดตามใน Git
├── codecept.conf.ts            # ไฟล์ตั้งค่าการทดสอบด้วย CodeceptJS
├── package.json                # ข้อมูล dependencies และสคริปต์ของโปรเจกต์
├── package-lock.json           # ข้อมูล dependencies ที่ถูกล็อคเวอร์ชันไว้
├── tsconfig.json               # การตั้งค่าสำหรับ TypeScript
└── README.md                   # เอกสารประกอบโปรเจกต์ -->