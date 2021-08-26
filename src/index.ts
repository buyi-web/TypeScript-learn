type Cards = CardItem[]

type CardType = "♥"|"♠"|"♣"|"♦"

type CardItem = {
    type: CardType,
    mark: number
}

function createCard(): Cards {
    const cards: Cards = [];
    for (let i = 0; i <= 13; i++) {
        cards.push({
            mark: i,
            type: '♥'
        })
        cards.push({
            mark: i,
            type: '♠'
        })
        cards.push({
            mark: i,
            type: '♣'
        })
        cards.push({
            mark: i,
            type: '♦'
        })
    }
    return cards;
}

function printCard(cards: Cards){
    cards.forEach(card => {
        let str = card.type;
        if(card.mark <= 10) {
            str += card.mark
        }else if(card.mark === 11) {
            str += "J"
        }else if(card.mark === 12) {
            str += "Q"
        }else if(card.mark === 13) {
            str += "K"
        }
        console.log(str);
    })
}