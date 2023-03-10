import React from "react";


function Profile() {
    return (  
    <div className="pb-5">
      <div className="relative h-40">
        <img className="absolute h-full w-full object-cover" src="https://res.cloudinary.com/practicaldev/image/fetch/s--a0VqOvf_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4a6t7pmm323uaz9rv1rf.png"/>
      </div>
      <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img className=" object-cover object-center w-30 h-30" src="https://i.ibb.co/QNNnwJM/315050076-2005437016308785-1048091665151425563-n.jpg" alt="315050076-2005437016308785-1048091665151425563-nhttps://i.ibb.co/QNNnwJM/315050076-2005437016308785-1048091665151425563-n.jpg" />
      </div>
      <div className="mt-16">
        <h1 className="text-lg text-center font-semibold">
          Herbitok 
        </h1>
        <p className="text-sm text-gray-600 text-center">
          BS - Information Technology
        </p>
      </div>
      
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
        <div className="text-sm font-bold mr-2 my-1 uppercase tracking-wider border px-2  border-indigo-600 bg-indigo-600 text-indigo-100 cursor-default">
          What if 
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
        dili ra ikaw iyang gina entertain
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          dili na diay siya interested nimo
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Gikapoy na siyas imong batasan
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          dili diay jud to sila friends lang
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Mag study naka dara
        </div>
        
      </div>
      
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
      <p className=" pt-12
      text-md max-w-xl mb-6 font-normal text-justify"> Hervey Geralph Cabig Mapano was a Filipino Student from Liceo De Cagayan University and a aspiring Programmer, Game Developer and bunch of nonesense things. Anyways, I wrote my own biography so I will dectate what you should know about me. hehe. So Hervey was born in March 9, 2002 and raised on Cagayan de Oro City, Misamis Oriental, Philippines. Hervey is currently living with his parents. Hervey likes to play video games though he is so bad in anygames he played. Get Good kid. Because of playing games he realize that "why not I make my own game - hervey, 2010 ". Because of that, He began to play more games. He always absent in his junior highschool years just to play that crappy dota 2 game and then when he is on Senior highschool he promise to himself not to play games anymore and focus on learning. but that didnt work because he continue to play games but we have also some character development in here because he doesnt skip school anymore.</p>
      </div>
      </div>
   
    );
}

export default Profile