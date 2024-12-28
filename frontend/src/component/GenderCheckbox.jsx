const GenderCheckbox=({oncheckboxchange,selectedGender})=>{
    return (
        <div className="flex">
            <div className="form-control">
                <lable className={`lable gap-2 cursor-pointer  ${selectedGender==='male'?"selected":""}`}>
                    <span className='text-neutral-200 p-2 '>Male</span>
                    <input type="checkbox" className="checkbox border-slate-500"
                     checked={selectedGender==="male"}
                     onChange={()=>oncheckboxchange("male")}
                    />
              </lable>
            </div>
            <div className="form-control">
                <lable className={` gap-2 cursor-pointer  ${selectedGender==='female'?"selected":""}`}>
                    <span className='text-neutral-200 p-2 pb-[10px]'>Female</span>
                    <input type="checkbox" className="checkbox border-slate-500" 
                       checked={selectedGender==="female"}
                       onChange={()=>oncheckboxchange("female")}
                    />
              </lable>
            </div> 

        </div>
    );
}
export default GenderCheckbox;