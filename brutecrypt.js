import bcrypt from 'bcrypt'
import fs from 'fs'
import events from 'events'
import  readline from 'readline'

const file = process.argv[2]
const hash = process.argv[3]

const verify = async () => {

    const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity
    });

    rl.on('line', async (line) => {
        const validPassword = await bcrypt.compare(line, hash)
        if (validPassword) {
            console.log(`Password: ${line}`)
        }

        await events.once(rl, 'close');

    });

}

try {
    
    verify()

} catch (error) {
    console.log(error)
}