// Example JavaScript for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Below for chart preparation
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Python', 'SQL', 'AWS', 'Tableau'],
//         datasets: [{
//             label: 'My Skill Level',
//             data: [95, 85, 70, 80],
//             backgroundColor: ['red', 'blue', 'green', 'purple'],
//             borderColor: ['red', 'blue', 'green', 'purple'],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
