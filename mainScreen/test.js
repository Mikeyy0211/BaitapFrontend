let count = 0;
const exams = [
    // { name: "Practice 1", status: "free-access" },
    // { name: "Mid-term grade 1", status: "scheduled", startTime: "2024-03-20T09:00:00", endTime: "2024-03-20T12:00:00" },
    // { name: "Final-term grade 1", status: "scheduled", startTime: "2024-03-20T09:00:00", endTime: "2024-03-20T12:00:00" },
    // Thêm các kỳ thi khác nếu cần
];
for (let i = 1; i <= 5; i++) {
    exams.push({ name: `Practice ${i}`, status: 'free-access' });
}
for (let i = 1; i <= 5; i++) {
    exams.push({ name: `Mid-term grade ${i}`, status: 'scheduled', startTime: "2024-03-20T09:00:00", endTime: "2024-03-20T12:00:00" });
}
for (let i = 1; i <= 5; i++) {
    exams.push({ name: `Final-term grade ${i}`, status: 'scheduled', startTime: "2024-03-20T09:00:00", endTime: "2024-03-20T12:00:00" });
}
// Hiển thị danh sách các kỳ thi
function displayExams(examsToShow) {
    const examList = document.getElementById("exam-list");
    examList.innerHTML = "";
    examsToShow.forEach(exam => {
        const listItem = document.createElement("li");
        let examLink = document.createElement("a");
        examLink.textContent = exam.name + " - " + exam.status;
        if (exam.status === 'free-access' && exam.name.startsWith("Practice")) {
            const examNumber = exam.name.split(" ")[1];
            if (examNumber) {
                examLink.href = `../quiz/quiz${examNumber}.html?exam=Practice${examNumber}`;
            } else {
                examLink.href = "../quiz/quiz2.html?exam=Practice";
            }
        } else if (exam.status != 'free-access') {
            examLink.href = "#";
            examLink.onclick = function (e) {
                e.preventDefault();
                if (examDate(exam.startTime, exam.endTime)) {
                    window.location.href = "quiz02.html?exam=" + exam.name;
                } else {
                    window.location.href = "https://www.facebook.com/vuhoang.le.338"
                }
            }
        }
        listItem.appendChild(examLink);
        examList.appendChild(listItem);
    });
}

function examDate(startTime, endTime) {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    return now >= start && now <= end;
}

// Lọc danh sách kỳ thi theo trạng thái
function filterExams(status) {
    const filteredExams = (status === "all") ? exams : exams.filter(exam => exam.status === status);
    displayExams(filteredExams);
}

// Tìm kiếm kỳ thi theo tên
function searchExams(keyword) {
    const filteredExams = exams.filter(exam => exam.name.toLowerCase().includes(keyword.toLowerCase()));
    displayExams(filteredExams);
}

// Sự kiện khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
    displayExams(exams); // Hiển thị danh sách kỳ thi khi trang được tải

    // Lắng nghe sự kiện lọc
    const statusFilter = document.getElementById("status-filter");
    statusFilter.addEventListener("change", () => {
        const selectedStatus = statusFilter.value;
        filterExams(selectedStatus);
    });

    // Lắng nghe sự kiện tìm kiếm
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value;
        searchExams(keyword);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        const welcomeHeading = document.querySelector('#header h1');
        welcomeHeading.textContent += ` ${userName}`;
    }
})
window.onload = function () {
    const user = localStorage.getItem('userName');
    const userName = user.toUpperCase();
    if (userName) {
        document.getElementById('userNameDisplay').textContent = `Welcome, ${userName}`;
    } else {
        document.getElementById('userNameDisplay').textContent = `Welcome`;
    }
}