const loadworddetail = async () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    const res = await fetch(url);
    const details = await res.json();
    
    
    displayworddetails(details.data);
};

const displayworddetails = (issues) => {
    const detailsbox = document.getElementById("issue-box");
    
    
    detailsbox.innerHTML = "";

    
    const cardContainer = document.createElement("div");
    cardContainer.className = "p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    
    issues.forEach((issue) => {
        const card = document.createElement("div");
        
        
        card.innerHTML = `
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
                <div class="h-1 w-full bg-emerald-500"></div>
                
                <div class="p-5">
                    <div class="flex justify-between items-start mb-4">
                        <img src="assets/Open-Status.png" alt="status icon" class="w-6 h-6">
                        <div class="px-3 py-1 bg-red-50 text-red-500 text-xs font-bold rounded-lg uppercase">
                            ${issue.priority}
                        </div>
                    </div>

                    <h3 class="text-lg font-bold text-slate-800 mb-2 leading-snug">
                        ${issue.title}
                    </h3>
                    
                    <p class="text-slate-500 text-sm mb-4">
                        ${issue.description.substring(0, 75)}...
                    </p>

                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="px-3 py-1 bg-red-50 text-red-500 border border-red-200 rounded-full text-xs font-bold flex items-center gap-1">
                            BUG
                        </span>
                        <span class="px-3 py-1 bg-amber-50 text-amber-600 border border-amber-200 rounded-full text-xs font-bold flex items-center gap-1">
                            HELP WANTED
                        </span>
                    </div>
                </div>

                <div class="border-t border-gray-100 p-5 bg-white">
                    <p class="text-slate-500 text-sm mb-1">${issue.issue_id} by ${issue.author}</p>
                    <p class="text-slate-500 text-sm">${issue.updated_at || '1/15/2024'}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    detailsbox.appendChild(cardContainer);
};


loadworddetail();


document.getElementById("btn-search").addEventListener("click",()=>{
    const input =document.getElementById("input-search");
    const searchvalue = input.value.trim().toLowercase();
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications")
    .then(res=>res.json())
    .then((data) => {
        const allwords= data.data;
        const filterwords = allwords.filter(word => word.word.toLowercase().includes(searchvalue));
        displaylevelword(filterwords);
    })
})

