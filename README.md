# 🎯 Quiz App

A dynamic and interactive **Quiz Web Application** built using **HTML**, **CSS**, and **JavaScript**. The app allows users to test their knowledge across multiple categories with randomly shuffled questions and options.

## 🌟 Features

- ✅ Multi-category questions (e.g., HTML, CSS, JavaScript)
- 🔀 Randomized questions and options every time the quiz starts
- 🧠 Live score tracking
- ⏱️ Timer-based quiz
- 🔄 Restart functionality
- 📱 Mobile responsive design
- ⚙️ Smooth animations and transitions

## 🧠 App Logic Overview

1. **Question Bank**: Stored as an array of objects in JavaScript, each with `id`, `category`, `question`, `options`, and `answer`.

2. **Shuffling**:
   - Questions and their options are randomized using the **Fisher-Yates shuffle** algorithm.

3. **Question Rendering**:
   - Each question is displayed dynamically using JavaScript.
   - Options are created as clickable list items with event listeners.

4. **Score Tracking**:
   - On selecting an answer, it is compared with the correct one.
   - Score is updated in real-time and displayed at the end.

5. **Timer Functionality**:
   - A countdown timer starts with each quiz attempt.
   - If time runs out, the quiz ends automatically.

6. **Result Display**:
   - At the end, the user sees their total score and time taken.
   - Option to restart the quiz is available.

## 📸 Screenshots
![Screenshot 2025-07-03 191231](https://github.com/user-attachments/assets/38e60ec0-bb30-4b6f-80be-266f420664f7)


## 🛠️ Technologies Used

- **HTML**: Markup for the structure
- **CSS**: Styling and layout
- **JavaScript**: App logic and interactivity



