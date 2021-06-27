// import bookApp from "./apps/book/pages/book-app.js"
import emailApp from "./apps/mail/pages/email-app.js"
import homePage from "./pages/homepage.js"
import notesApp from "./apps/keep/pages/notes-app.js"
import emailDetails from "./apps/mail/pages/email-details.js"
import emailAdd from "./apps/mail/cmps/email-add.js"
import emailSent from "./apps/mail/cmps/email-sent.js"
import emailList from "./apps/mail/cmps/email-list.js"
import emailStar from "./apps/mail/cmps/email-star.js"
import userMsg from "./cmps/user-msg.js"
import aboutPage from "./pages/about-page.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
		component: emailApp,
		children: [
			{
				path: 'inbox',
				component: emailList,
			},
			{
				path: 'sent',
				component: emailSent,
			},
			{
				path: 'star',
				component: emailStar,
			},
		],
	},
	{
		path: '/mail/:emailId',
		component: emailDetails,
	},
    {
        path: '/notes',
        component: notesApp
    },
    {
        path:'/compose',
        component:emailAdd
    },
    {
        path:'/about',
        component:aboutPage
    }
    // {
    //     path: '/books',
    //     component: bookApp
    // },
    // {
    //     path:'/books/:bookId',
    //     component:bookDetails
    // },
]
export const router = new VueRouter({ routes })
