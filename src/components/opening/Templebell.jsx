function TempleBell({ openDoor }) {

return(

<div

className="

fixed

top-10

left-1/2

-translate-x-1/2

z-60

cursor-pointer

"

onClick={openDoor}

>

<div className="text-8xl">

🔔

</div>

<p

className="

text-yellow-200

text-center

mt-3

text-lg

tracking-widest

"

>

Touch to Open

</p>

</div>

)

}

export default TempleBell