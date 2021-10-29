const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')
const uuid = require('uuid').v1

const nodeAddress = uuid().split('—').join("")

const Moebcoin = new Blockchain();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/blockchain', function (req, res) {
    res.send(Moebcoin)
})

app.post('/transaction', function (req, res) {
    const blockIndex = Moebcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `Transaction will be added in block ${blockIndex}.`})
})

app.get('/mine', function (req,res) {
    const lastBlock = Moebcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash']
    const currentBlockData = {
        transactions: Moebcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }

    const nonce = Moebcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = Moebcoin.hashBlock(previousBlockHash, currentBlockData, nonce)

    Moebcoin.createNewTransaction(10, "00", nodeAddress)

    const newBlock = Moebcoin.createNewBlock(nonce, previousBlockHash, blockHash)
    res.json({
        note: "New block mined successfully",
        block: newBlock
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})