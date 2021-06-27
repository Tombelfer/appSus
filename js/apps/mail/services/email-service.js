import { utilService } from "../../book/services/util-service.js";
import { storageService } from "../../book/services/async-storage-service.js";

const EMAILS_KEY = ' emails'
// const gEmails = createEmail()

export const emailService = {
    query,
    remove,
    save,
    getById,
    getNextCarId,
    createEmail
};
function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            if (!emails.length) {
                storageService.postMany(EMAILS_KEY, defaultEmails)
                return defaultEmails
            }
            return emails
        })
}
function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
        // .then(query())
}

function save(email) {
    console.log('Save!')
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}

function getNextCarId(emailId) {
    return query()
        .then(emails => {
            const idx = emails.findIndex(email => email.id === emailId)
            return (idx === emails.length - 1) ? emails[0].id : emails[idx + 1].id
        })
}
function _createEmails() {
    const emails = []
    emails.push((_createEmail('Wassap?', 'Pick up!')))
    emails.push((_createEmail('are you?', '!')))
    emails.push((_createEmail('Hello Tom!', 'Did you RUN?')))
    emails.push((_createEmail('Hi!', 'Did you RUN?')))
    console.log * emails
    return emails
}



function createEmail() {
    const email = {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:false,
        emailfrom: '',
        emailTo:'tombeler@gmail.com',
        emailSubject: '',
        emailBody:'',
        sentAt: Date.now(),
        isRead: true
    }
    return email
}

    const defaultEmails = [
    {
        id: utilService.makeId(),
        isStar:true,
        isIncomig:false,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'Noder@gmail.com',
        emailSubject: 'Your CSS is suffering',
        emailBody:'Aiores, nihil in corporis deserunt natus consequuntur est voluptatum voluptatem iure dicta reiciendis labore iste voluptate, inventore molestias velit deleniti omnis veniam. Recusandae, fuga? Quos illum quod accusantium quo, earum tenetur! Autem aspernatur sunt hic! Eaque, modi veniam! Dolore vitae veniam quas? Consequatur quia laborum, error aperiam iste magnam? Ea saepe nisi, nobis perferendis sapiente temporibus velit corporis quis libero odio, natus quia adipisci? Quibusdam maiores provident quis eaque fugiat sint nihil aliquam ipsum exercitationem, voluptatibus reiciendis esse adipisci sit repudiandae assumenda aspernatur dolorum pariatur! Perspiciatis delectus aliquid nihil, dicta laborum repudiandae illum molestias ullam reprehenderit et eum nulla nostrum quis dolorem. Ipsam soluta fugiat sapiente nulla quibusdam sed amet, debitis corrupti. Impedit enim debitis nulla, nostrum laborum eos perferendis. Qui iusto pariatur, commodi asperiores, velit reiciendis, magnam provident dignissimos quae neque iure laudantium ut ab nam at? Impedit ea temporibus fuga fugiat, eos velit cupiditate doloremque magnam consequuntur? Aut, accusamus. Aut, dolorem minima illum repudiandae odit quam harum inventore modi veritatis! Fugit sed, similique vero a atque harum unde vitae veritatis dolorum ab animi laborum velit, consequatur id odio nostrum architecto, voluptas incidunt nihil beatae quasi? Veritatis, nisi?',
        sentAt: Date.now(),
        isRead: true
    },
    {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:true,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'avi@gmail.com',
        emailSubject: 'Hello',
        emailBody:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sint blanditiis maiores, nihil in corporis deserunt natus consequuntur est voluptatum voluptatem iure dicta reiciendis labore iste voluptate, inventore molestias velit deleniti omnis veniam. Recusandae, fuga? Quos illum quod accusantium quo, earum tenetur! Autem aspernatur sunt hic! Eaque, modi veniam! Dolore vitae veniam quas? Consequatur quia laborum, error aperiam iste magnam? Ea saepe nisi, nobis perferendis sapiente temporibus velit corporis quis libero odio, natus quia adipisci? Quibusdam maiores provident quis eaque fugiat sint nihil aliquam ipsum exercitationem, voluptatibus reiciendis esse adipisci sit repudiandae assumenda aspernatur dolorum pariatur! Perspiciatis delectus aliquid nihil, dicta laborum repudiandae illum molestias ullam reprehenderit et eum nulla nostrum quis dolorem. Ipsam soluta fugiat sapiente nulla quibusdam sed amet, debitis corrupti. Impedit enim debitis nulla, nostrum laborum eos perferendis. Qui iusto pariatur, commodi asperiores, velit reiciendis, magnam provident dignissimos quae neque iure laudantium ut ab nam at? Impedit ea temporibus fuga fugiat, eos velit cupiditate doloremque magnam consequuntur? Aut, accusamus. Aut, dolorem minima illum repudiandae odit quam harum inventore modi veritatis! Fugit sed, similique vero a atque harum unde vitae veritatis dolorum ab animi laborum velit, consequatur id odio nostrum architecto, voluptas incidunt nihil beatae quasi? Veritatis, nisi?',
        sentAt: Date.now(),
        isRead: false
    },
    {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:true,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'ran@aliexpress.com',
        emailSubject: 'Are you satisfied with your order?',
        emailBody:'Confirm that you got your package,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sint blanditiis maiores, nihil in corporis',
        sentAt: Date.now(),
        isRead: false
    },
    {
        id: utilService.makeId(),
        isStar:true,
        isIncomig:false,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'tom@linkdin.com',
        emailSubject: ' You have 3 new connections',
        emailBody:'Check out their profiles and start a conversation',
        sentAt: Date.now(),
        isRead: true
    },
    {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:false,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'misterBit@gmail.com',
        emailSubject: 'You can still save 30% for Prime Day!',
        emailBody:'hello',
        sentAt: Date.now(),
        isRead: false
    },
    {
        id: utilService.makeId(),
        isStar:true,
        isIncomig:true,
        emailTo:'tombeler@gmail.com',
        emailfrom: 'omer@gmail.com',
        emailSubject: 'Tom, looking for a new job?',
        emailBody:'You can still get $20 off your ads‏‏',
        sentAt: Date.now(),
        isRead: false
    },
    {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:false,
        emailTo:'tomer@gmail.com',
        emailfrom: 'tombeler@gmail.com',
        emailSubject: 'Join US!',
        emailBody:'adipisicing elit. Accusantium sint blanditiis maiores, nihil in corporis deserunt natus consequuntur est voluptatum voluptatem iure dicta reiciendis labore iste voluptate, inventore molestias velit deleniti omnis veniam. Recusandae, fuga? Quos illum quod accusantium quo, earum tenetur! Autem aspernatur sunt hic! Eaque, modi veniam! Dolore vitae veniam quas? Consequatur quia laborum, error aperiam iste magnam? Ea saepe nisi, nobis perferendis sapiente temporibus velit corporis quis libero odio, natus quia adipisci? Quibusdam maiores provident quis eaque fugiat sint nihil aliquam ipsum exercitationem, voluptatibus reiciendis esse adipisci sit repudiandae assumenda aspernatur dolorum pariatur! Perspiciatis delectus aliquid nihil, dicta laborum repudiandae illum molestias ullam reprehenderit et eum nulla nostrum quis dolorem. Ipsam soluta fugiat sapiente nulla quibusdam sed amet, debitis corrupti. Impedit enim debitis nulla, nostrum laborum eos perferendis. Qui iusto pariatur, commodi asperiores, velit reiciendis, magnam provident dignissimos quae neque iure laudantium ut ab nam at? Impedit ea temporibus fuga fugiat, eos velit cupiditate doloremque magnam consequuntur? Aut, accusamus. Aut, dolorem minima illum repudiandae odit quam harum inventore modi veritatis! Fugit sed, similique vero a atque harum unde vitae veritatis dolorum ab animi laborum velit, consequatur id odio nostrum architecto, voluptas incidunt nihil beatae quasi? Veritatis, nisi?',
        sentAt: Date.now(),
        isRead: false
    },
    {
        id: utilService.makeId(),
        isStar:false,
        isIncomig:true,
        emailTo:'tomer@gmail.com',
        emailfrom: 'amir@facebook.com',
        emailSubject: 'Dana liked your photo!!',
        emailBody:'Use your ad credit to reach even more people with your next ad.',
        sentAt: Date.now(),
        isRead: true
    },
]