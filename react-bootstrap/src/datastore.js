
const userinputforms = ["systeminputtaskconfig", "systeminputtaskconfig", "inputtasks"];

const systempriority = [{name: "Trivial"},	{name:"Normal (default)"},	{name:"Urgent"}];
const systemtaskbuckets = [{name: "planned"},{name: "unplanned"}];
const systemfrequency = [
    {"title": "Daily", "days":1, weeks: '.', months: '.', years: '.'},
    {"title": "Weekly", days:'.', "weeks":1, months:'.', years:'.'},
    {"title": "Monthly", days:'.', weeks: '.',  "months":1, years: '.'},
    {"title": "2MonthsOnce", days:'.', weeks: '.', "months":2, years: '.'},
    {"title": "Quarterly", days:'.', weeks: '.', "months":3, years: '.'},
    {"title": "Half-yearly", days:'.', weeks: '.', "months":6, years: '.'},
    {"title": "Annually", days:'.', weeks: '.', months:'.', "years":1}
];
const systemfinancecategory = [	{"Name":"Asset",		"Premeditated?":"(Known)",	"Eg":"House,Stocks,MF,Gold,Bond,savings,emergency,child"},
                {"Name":"Liability",		"Premeditated?":"(Known)",	"Eg":"Car,Bills(planned),Loan,Insurance,Maintenance(planned),budget(planned)"},
                {"Name":"Income",		"Premeditated?":"(Known)",
                "Eg":"Job(active),Interest(passive),Dividend(passive),Rental(passive),Business(active)"},
                {"Name":"Expense",		"Premeditated?":"(Unknown)",	"Eg":"Groceries(unplanned),Lifestyle(unplanned)"}
];
const systeminputtaskfinancecategory = [
    {"Name":"Family Budget","FinanceCategory":"Liability" },
    {"Name":"Household Budget","FinanceCategory":"Liability" },
    {"Name":"Investments","FinanceCategory":"Asset","Eg":"(Eg. savings, stocks, bonds, gold)" },
    {"Name":"Event","FinanceCategory":"Expense","Eg":"(birthday, anniversary)" },
    {"Name":"Activity","FinanceCategory":"(None)","Eg":"(do stuff)" },
    {"Name":"Event","FinanceCategory":"Expense","Eg":"(birthday, anniversary)" },
    {"Name":"House Maintenance","FinanceCategory":"Liability","Eg":"(get someone else to do stuff)" },
    {"Name":"Common Maintenance","FinanceCategory":"Liability" },
    {"Name":"Repairs","FinanceCategory":"Expense" },
    {"Name":"Lifestyle","FinanceCategory":"Expense", "Eg":"(clothes, shoes, shopping, luxury)" },
    {"Name":"Loan","FinanceCategory":"Liability" },
    {"Name":"<Enter Data>","FinanceCategory":"<Choose Finance-Category>", "Eg":"<Enter Example>" }
];
const systeminputtaskconfig = [
    {"Name":"Bills", "taskfinancecategory":"Family Budget", "taskbucket":"Planned"},
    {"Name":"<Enter Data>", "taskfinancecategory":"<Choose Task-FinanceCategory>", "taskbucket":"<Choose Task Bucket>"}
];
const systemtaskstatus = [{name:"new"},{name:"inprogress"},{name:"done"},{name:"cancelled"} ];
const inputtasks = [
    {
        "systemtaskid":1,
        "status":"<Choose Task-Status>",
        "title":"<Enter Data>", "taskconfig": "<Choose task-config>", "priority?": "<Choose Priority>", 
        //"reminder?":{"frequency":"<Choose Frequency>", "cycledate":"<Choose Date>", "tilldate":"<Choose Date>"}, 
        //"transaction?":{"name":"<Enter data>", "amount":"", "type":"<Choose Credit/Debit>", "proof?":"<Upload proof>"}
    },
    {
        "systemtaskid":2,
        "status":"<Choose Task-Status>",
        "title":"<Enter Data>", "taskconfig": "<Choose task-config>", "priority?": "<Choose Priority>", 
        //"reminder?":{"frequency":"<Choose Frequency>", "cycledate":"<Choose Date>", "tilldate":"<Choose Date>"}, 
        //"transaction?":{"name":"<Enter data>", "amount":"", "type":"<Choose Credit/Debit>", "proof?":"<Upload proof>"}
    }
];
const systemtaskhistory = [
    {"taskid":1, "status":"new>inprogress", "taskconfig":"Bills>Insurance"},
    {"taskid":2, "status":"new>inprogress", "taskconfig":"Bills>Insurance"}
];

export {userinputforms,
    systempriority, 
    systemtaskbuckets, 
    systemfrequency, 
    systemfinancecategory, 
    systeminputtaskfinancecategory, 
    systeminputtaskconfig, 
    systemtaskstatus, 
    inputtasks, 
    systemtaskhistory};