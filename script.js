class Start{
    constructor(){
        this.playerName = "Kamu"
        this.botName = "Bot"
        this.playerOption;
        this.botOption;
        this.winner = ""

            // SCORE MASIH BELUM BISA(SELALU KE RESET)
        // this.scoreKamu = 0
        // this.scoreBot = 0
    }

    get getBotOption(){
        return this.botOption;
    }

    set setBotOption(option){
        this.botOption = option
    }

    get getPlayerOption(){
        return this.playerOption
    }

    set setPlayerOption(option){
        this.playerOption = option;
    }

    botRandom(){
        const option = ["✊", "✌", "🖐"];
        const bot = option[Math.floor(Math.random() * option.length)];
        // console.log("bot pilih : ", bot)
        return bot;
    }

    winCalculation(){
        if(this.playerOption == this.botOption){
            this.winner = "SERI"
        }else if(this.playerOption == "✊"){
            this.winner = (this.botOption == "✌") ? this.playerName : this.botName;
        }else if(this.playerOption == "✌"){
            this.winner = (this.botOption == "✊") ? this.botName : this.playerName;
        }else if(this.playerOption == "🖐"){
            this.winner = (this.botOption == "✊") ? this.playerName : this.botName;
        }else{
            this.winner = "TIDAK DIKETAHUI"
        }

        if(this.winner == this.playerName){
            this.scoreKamu++;
        }else if(this.winner == this.botName){
             this.scoreBot++;
        }
    }

    matchResult(){
        if(this.winner != "SERI"){
            return `${this.winner} MENANG!`;
        }else{
            return `NGGA ADA YANG MENANG😴`;
        }
    }

}

function pickOption(para){
    const start = new Start();
    start.playerOption = para;
    start.setBotOption = start.botRandom();

    console.log("Kamu milih ", start.playerOption);
    console.log("bot pilih ", start.botOption)

    start.winCalculation();
    console.log("Pemenang ", start.winner);
    console.log("Hasil akhir ", start.matchResult())

    // SCORE MASIH BELUM BISA(SELALU KE RESET)
    // console.log('score kamu : ', start.scoreKamu);
    // console.log('score bot : ', start.scoreBot);

    const memilih = document.getElementById("memilih");
    const hasil = document.getElementById("hasil");

    memilih.textContent = "...."
    hasil.textContent = "...."

    setTimeout(() =>{
    memilih.textContent = `Kamu ${start.playerOption} VS ${start.botOption} Bot`
    hasil.textContent = start.matchResult();
        
    }, 1200);

    
}