const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();

const previousBlockHash = 'KFAPOKSFPOAKSFPOAKFPOAKSFPOAPFSKFO'
const currentBlockData = [
    {
        amount: 10,
        sender: 'JFASFASJFQWFQFFAFWFFASF',
        recipient: '912k90r1k9fafa02fk3109f',
    },
    {
        amount: 50,
        sender: 'FASFPWKQOPFKWQF',
        recipient: 'FSAFPPOWQMFPOWQF',
    },
    {
        amount: 30,
        sender: 'FKWQKFPQOWKFPOQWKF',
        recipient: 'FMASPOFMASPOFMFASF',
    },
]

console.log(bitcoin);

