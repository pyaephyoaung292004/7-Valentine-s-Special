    function goToNextPage() {
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            
            page1.classList.add('fade-out');
            
            setTimeout(() => {
                page1.classList.add('hidden');
                page2.classList.remove('hidden');
                window.scrollTo(0, 0);
            }, 1000);
        }
        function goToFirstPage() {
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            
            page2.classList.add('fade-out');
            
            setTimeout(() => {
                page2.classList.add('hidden');
                page1.classList.remove('hidden');
                page1.classList.remove('fade-out'); // ပထမစာမျက်နှာကို ပြန်ဖော်ခြင်း
                window.scrollTo(0, 0);
            }, 1000);
        }

        // 🗓️ စတင်ရေတွက်မည့် အတိတ်က ရက်စွဲ (ဇန်နဝါရီ ၁၊ ၂၀၂၆)
        const startDate = new Date("Jan 1, 2026 00:00:00").getTime();

        // ၁ စက္ကန့်တိုင်း အလိုအလျောက် တိုးပြီး ရေတွက်မည့် စနစ်
        const timerInterval = setInterval(function() {
            const now = new Date().getTime();
            
            // ဒီနေ့အချိန်ထဲကနေ စတင်ခဲ့တဲ့ အချိန်ကို နှုတ်ပြီး ကွာခြားချက်ကို ယူပါတယ်
            const difference = now - startDate;

            // နေ့၊ နာရီ၊ မိနစ်၊ စက္ကန့် ပြန်ပြောင်းတွက်ချက်ခြင်း
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // စာသားအဖြစ် ပြသခြင်း (ဥပမာ- 150d : 12h : 30m : 45s ဆိုပြီး တိုးတိုးသွားပါမယ်)
            document.getElementById("countdown").innerHTML = 
                days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";

        }, 1000);