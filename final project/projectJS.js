function generateMealPlan() {
    const form = document.getElementById('mealPlanForm');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const goal = form.goal.value.trim();
    const breakfast = form.breakfast.value.trim();
    const snack1 = form.snack1.value.trim();
    const lunch = form.lunch.value.trim();
    const snack2 = form.snack2.value.trim();
    const dinner = form.dinner.value.trim();
    const breakfast2 = form.breakfast2.value.trim();
    const snack1a = form.snack1a.value.trim();
    const lunch2 = form.lunch2.value.trim();
    const snack2a = form.snack2a.value.trim();
    const dinner2 = form.dinner2.value.trim();
    const breakfast3 = form.breakfast3.value.trim();
    const snack1b = form.snack1b.value.trim();
    const lunch3 = form.lunch3.value.trim();
    const snack2b = form.snack2b.value.trim();
    const dinner3 = form.dinner3.value.trim();
    const breakfast4 = form.breakfast4.value.trim();
    const snack1c = form.snack1c.value.trim();
    const lunch4 = form.lunch4.value.trim();
    const snack2c = form.snack2c.value.trim();
    const dinner4 = form.dinner4.value.trim();
    const breakfast5 = form.breakfast5.value.trim();
    const snack1d = form.snack1d.value.trim();
    const lunch5 = form.lunch5.value.trim();
    const snack2d = form.snack2d.value.trim();
    const dinner5 = form.dinner5.value.trim();
    const breakfast6 = form.breakfast6.value.trim();
    const snack1e = form.snack1e.value.trim();
    const lunch6 = form.lunch6.value.trim();
    const snack2e = form.snack2e.value.trim();
    const dinner6 = form.dinner6.value.trim();
    const breakfast7 = form.breakfast7.value.trim();
    const snack1f = form.snack1f.value.trim();
    const lunch7 = form.lunch7.value.trim();
    const snack2f = form.snack2f.value.trim();
    const dinner7 = form.dinner7.value.trim();

    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Create a new window and write the meal plan content
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Weekly Meal Plan</title>
            <style>
                body {
                    font-family: monospace;
                    padding: 20px;
                }
                h1, h2 {
                    text-align: center;
                }
                .meal-plan {
                    margin-top: 20px;
                }
                .meal {
                    margin-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <h1>${name}'s Weekly Meal Plan</h1>
            <h2>Goal: ${goal}</h2>
            <div class="meal-plan">
            <legend>Monday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner}</div>
            </div>
            <div class="meal-plan">
            <legend>Tuesday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast2}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1a}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch2}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2a}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner2}</div>
            </div>
            <div class="meal-plan">
            <legend>Wednesday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast3}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1b}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch3}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2b}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner3}</div>
            <div class="meal-plan">
            <legend>Thursday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast4}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1c}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch4}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2c}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner4}</div>
            </div>
            <div class="meal-plan">
            <legend>Friday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast5}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1d}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch5}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2d}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner5}</div>
            </div>
            <div class="meal-plan">
            <legend>Saturday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast6}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1e}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch6}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2e}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner6}</div>
            <div class="meal-plan">
            <legend>Sunday</legend>
                <div class="meal"><strong>Breakfast:</strong> ${breakfast7}</div>
                <div class="meal"><strong>Snack (AM):</strong> ${snack1f}</div>
                <div class="meal"><strong>Lunch:</strong> ${lunch7}</div>
                <div class="meal"><strong>Snack (PM):</strong> ${snack2f}</div>
                <div class="meal"><strong>Dinner:</strong> ${dinner7}</div>
            </div>
            </div>
            </div>
                      <button class="download-btn" onclick="downloadPlan()">Download Plan</button>
                      <button class="print-btn" onclick="window.print()">Print Plan</button>
            <script>
                function downloadPlan() {
                    const planContent = document.body.innerHTML;
                    const blob = new Blob([planContent], { type: 'text/html' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'weekly_meal_plan.html';
                    link.click();
                }
            </script>
        </body>
        </html>
    `);
    newWindow.document.close();
}