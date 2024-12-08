function addAnswer() {
    // Tạo một phần tử div mới chứa các input cho câu trả lời
    var newAnswerDiv = document.createElement("div");
    newAnswerDiv.classList.add("form-group");

    // Tạo input cho Answer mới
    var label = document.createElement("label");
    label.innerText = "Answer";
    newAnswerDiv.appendChild(label);

    var input = document.createElement("input");
    input.type = "text";
    input.name = "answer[]"; // Mảng để gửi nhiều câu trả lời
    input.classList.add("form-control", "mb-3");
    input.required = true;
    newAnswerDiv.appendChild(input);

    // Thêm vào form
    document.getElementById("answers-container").appendChild(newAnswerDiv);
}