import React, {useState} from 'react';

const Create = ({ auth, all_skills }) => {
    const [formData, setFormData] = useState({
        min_salary: 0,
        max_salary: 0,
        skills: [],
    })

    const [skills, setSkills] = useState(all_skills);
    const [skillSelectId, setSkillSelectId] = useState("-1");
    const [skillSelectName, setSkillSelectName] = useState('');
    const [skillLevel, setSkillLevel] = useState("1");

    const createResume = async (e) => {
        e.preventDefault();
        console.log({...formData, creator_id: auth.user.id});
        const response = await axios.post(route('resume.store'), {...formData, creator_id: auth.user.id})
            .then(response => {
                window.location.href = route('profile.edit')
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
                <br/>
                <div style={{display: "flex"}}>
                    <select>
                        <option>Выберите скилл</option>
                        {skills.map(skill => (
                            <option value={skill.id} key={skill.id} onClick={() => {
                                setSkillSelectId(skill.id)
                                setSkillSelectName(skill.name)
                            }}>{skill.name}</option>
                        ))}
                    </select>
                    <input type="range" min="1" max="10"
                           value={skillLevel}
                           onChange={(e) => setSkillLevel(e.target.value)}
                    />
                    <span>{skillLevel}</span>
                    <button onClick={(e) => {
                        if (skillSelectId !== "-1") {
                            e.preventDefault();
                            setFormData({
                                ...formData,
                                skills: [
                                    ...formData.skills,
                                    {id: skillSelectId, name: skillSelectName, level: skillLevel}
                                ]
                            })
                            setSkills(skills.filter((skill) => skill.id !== skillSelectId));
                            setSkillSelectId("-1");
                        } else {
                            e.preventDefault();
                            alert('Не пытайся переиграть меня)')
                        }
                    }} disabled={(skillSelectId === "-1")}>Добавить скилл</button>
                </div>
                <div>
                    <ul>
                        {formData.skills.map(skill => (
                            <li>{skill.id}. {skill.name}: {skill.level}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={createResume}>Создать!</button>
            </form>
        </div>
    );
};

export default Create;
