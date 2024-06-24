const Posts = () => {
   return (
      <div className="max-w-[1040px] mx-auto md:w-[75%] w-[90%]">
         {/* post tabs and bth */}
         <div className="flex justify-between">
            {/*  */}
            <div>
               <div role="tablist" className="tabs">
                  <a role="tab" className="tab">
                     All Posts(32)
                  </a>
                  <a role="tab" className="tab tab-active">
                     Article
                  </a>
                  <a role="tab" className="tab">
                     Event
                  </a>
                  <a role="tab" className="tab">
                     Education
                  </a>
                  <a role="tab" className="tab">
                     Job
                  </a>
               </div>
            </div>
            {/*  */}
            <div className="flex gap-3">
               {/*  */}
               <div>
                  <div className="dropdown dropdown-end">
                     <div tabIndex={0} role="button" className="btn m-1">
                        Click
                     </div>
                     <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                     >
                        <li>
                           <a>Item 1</a>
                        </li>
                        <li>
                           <a>Item 2</a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/*  */}
               <div>
                  <button className="btn">Join Group</button>
               </div>
            </div>
         </div>
         {/* post tabs and bth */}

         {/* post and recommended group */}
         <div></div>
      </div>
   );
};

export default Posts;
