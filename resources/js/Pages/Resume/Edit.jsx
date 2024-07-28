import React, {useState} from 'react';

const Create = ({ auth, resume }) => {
    const [formData, setFormData] = useState({
        min_salary: resume.min_salary,
        max_salary: resume.max_salary,
    })

    const createResume = async (e) => {
        e.preventDefault();
        console.log()
        const response = await axios.patch(route('resume.update'), {...formData, creator_id: auth.user.id})
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <form>
                min salary
                <input type="number"
                       value={formData.min_salary}
                       onChange={(e) => setFormData({...formData, min_salary: e.target.value})}/>
                max salary
                <input type="number"
                       value={formData.max_salary}
                       onChange={(e) => setFormData({...formData, max_salary: e.target.value})}/>
                <button onClick={createResume}>Редактировать</button>
            </form>
        </div>
    );
};

export default Create;
