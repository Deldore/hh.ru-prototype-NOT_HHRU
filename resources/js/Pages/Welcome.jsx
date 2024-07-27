import {Link, Head, router} from '@inertiajs/react';
import '@/Styles/welcome/style.css';
import logo from '@/../images/logo.png';
import search from '@/../images/icons/icons8-search.svg'
import Logout from "@/Components/Logout.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Главная" />
            <header>
                <div>
                    <img src={logo}/>
                    <h1 className={"lg:block"}>NOT HH.RU</h1>
                </div>
                <nav>
                    {auth.user ? (
                        <Logout></Logout>
                    ) : (
                        <>
                            <Link href={route('login')}>Авторизация</Link>
                            <Link href={route('register')}>Регистрация</Link>
                        </>
                    )}
                </nav>
            </header>
            <main className="">
                <div className="item first-block">
                    <h1>Ищете работу?</h1>
                    <span>150 компаний уже ищут Вас!</span>
                    <i style={{textAlign: "left", marginTop: "15px", marginLeft: "15px"}}>
                        На самом деле NotHH.ru это лишь прототип всеми известного hh.ru созданный для портфолио,
                        а также практики мной - Emil <a href="https://github.com/Deldore"><u>'Deldore'</u></a> Nabiullin <br/>
                        Подробнее с моими работами можете ознакомиться здесь:
                    </i>
                    <div className="comment">
                        <div className="commentNavigation">
                            <a className="xs-round" style={{background: "#62de24"}} href="https://github.com/Deldore?tab=repositories"></a>
                            <a className="xs-round" style={{background: "#ffdb4d"}} href="https://disk.yandex.ru/d/_8YrRGdcmEQr7A"></a>
                            <a className="xs-round" style={{background: "#24A1DE"}} href="https://t.me/tatardevelopment"></a>
                        </div>
                        <ul>
                            <li>Github - <a href="https://github.com/Deldore?tab=repositories">github.com/Deldore</a></li>
                            <li>Резюме - <a href="https://disk.yandex.ru/d/_8YrRGdcmEQr7A">Я.Диск</a></li>
                            <li>Telegram - <a href="https://t.me/tatardevelopment">TatDev | Development & Robotics</a></li>
                        </ul>
                    </div>
                    <div className="search">
                        <img src={search}/>
                        <input type="text"/>
                        <button>Найти работу</button>
                    </div>
                    <div className="startButton">
                        <button>Начать поиск!</button>
                    </div>
                </div>



                <div className="second-block">
                    <div className="item resume" style={{height: "50%"}}>
                        <div style={{width: "85%"}}>
                            <h2>Создать резюме</h2>
                            <p>Расскажите о себе, распишите свои навыки, благодаря которым работадатель сможет заметить Вас!</p>
                        </div>
                        <div style={{width: "15%", minWidth: "70px", display: "flex", justifyContent: "center"}}>
                            <div className="small_round">
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                    <div className="item resume" style={{height: "50%"}}>
                        <div style={{width: "85%"}}>
                            <h2>Создать вакансию</h2>
                            <p>Ищете опытных работников? Создайте вакансию, укажите требования для работы с Вами и изучайте резюме других людей, ищущих работу!</p>
                        </div>
                        <div style={{width: "15%", minWidth: "70px", display: "flex", justifyContent: "center"}}>
                        <div className="small_round">
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
