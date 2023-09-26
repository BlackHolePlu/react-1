import './App.css';
import img from './img/images.jpeg';
import SubmitBtn from './components/submit.js';


function App() {
  return (
    <div className="Container">
      <div className="header">
        <h1>First App</h1>
      </div>
      <div className="main">
        <p><span>Создание первого приложения</span> - это увлекательный и захватывающий опыт, который может помочь вам начать свой путь в мире разработки программного обеспечения. В этом тексте я расскажу о том, как создать первое приложение и какие шаги нужно предпринять для этого.</p>
      </div>
      <div className="block">
        <div className="box">
          <img src={img} alt="ipsum"/>
          <h2>ipsum</h2>
          <p>Для добавления тени к тексту можно воспользоваться CSS свойством text-shadow.</p>
        </div>
        <div className="box">
          <img src={img} alt="ipsum"/>
          <h2>ipsum</h2>
          <p>Для добавления тени к тексту можно воспользоваться CSS свойством text-shadow.</p>
        </div>
        <div className="box">
          <img src={img} alt="ipsum"/>
          <h2>ipsum</h2>
          <p>Для добавления тени к тексту можно воспользоваться CSS свойством text-shadow.</p>
        </div>
      </div>
      <SubmitBtn></SubmitBtn>
    </div>
  );
}

export default App;
