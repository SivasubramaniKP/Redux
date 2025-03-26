document.addEventListener("DOMContentLoaded", () => {
    const upvoteBtn = document.querySelector(".upvote");
    const downvoteBtn = document.querySelector(".downvote");
    const voteCount = document.querySelector(".vote-count");
    const questionTitle = document.querySelector(".question-title");

    let votes = 0;

    // Click event for upvote
    upvoteBtn.addEventListener("click", () => {
        votes++;
        voteCount.textContent = votes;
    });

    // Click event for downvote
    downvoteBtn.addEventListener("click", () => {
        votes--;
        voteCount.textContent = votes;
    });

    // Double-click event on the question title
    questionTitle.addEventListener("dblclick", () => {
        alert("You double-clicked the question!");
    });

    // Mouseover event on the question title
    questionTitle.addEventListener("mouseover", () => {
        questionTitle.style.color = "red";
    });

    // Mouseout event to reset the title color
    questionTitle.addEventListener("mouseout", () => {
        questionTitle.style.color = "#0077cc";
    });
});

