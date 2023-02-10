import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const blogs =[
  {
    "id":1,
    "title": "blog 1",
    "desc": "تعتبر جهاز الكمبيوتر أحد أهم الأدوات التي تستخدم في العالم اليوم. يشمل جهاز الكمبيوتر عدة جزء هامة بما في ذلك: الذاكرة (RAM), المعالج (CPU), الجهدية (power supply), القرص الصلب (hard drive), الشاشة (monitor), الماوس (mouse), اللوحة المفاتيح (keyboard), الصوت (speaker) والشبكة (network).",
    "img": "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/pc_ver_1.png"
  },
  {
    "id":2,
    "title": "blog 2",
    "desc": "gsfg ewrwe yjt  oluuiolu gfsdfgs fsdfتحتاج إلى مواصفات نظامك لمعرفة نوع أجهزة الكمبيوتر الجديدة التي يمكنك شراؤها، أو كنت ستبيع جهازك الحالي وتحتاج إلى معرفة المواصفات التي لديك حتى تتمكن من سردها في إعلانك لبيع جهازك القديم، يعد التحقق من مواصفات جهاز الكمبيوتر الخاص بك في الواقع مهمة سهلة للغاية",
    "img": "https://pbs.twimg.com/profile_images/1558708028379209730/YiwbQ-R7_400x400.jpg"
  },
  {
    "id":3,
    "title": "blog 3",
    "desc": "fsd fs aefds  e اللوحة المفاتيح للإدخال النصي وإجراء الإجراءات الأخرى على  sgfgsfdg ",
    "img": "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/121490932-apple-02_ver_1.jpg"
  },
  {
    "id":4,
    "title": "blog 4",
    "desc": "fsdfs sdf تستخدم الشاشة لعرض النتائج والمعلومات الخاصة بجهاز الكمبيوتر. erfaserf aerf  ",
    "img": "https://pbs.twimg.com/profile_images/1558708028379209730/YiwbQ-R7_400x400.jpg"
  },
  {
    "id":4,
    "title": "blog 4",
    "desc": "fsdfs sdf لجهدية (power supply) : توفر الجهدية الطاقة اللازمة لتشغيل جميع أجزاء جهاز الكمبيوتر erfaserf aerf  ",
    "img": "https://i.pcmag.com/imagery/reviews/03vgWGzPszXGuw7ZDpulrMm-1.fit_scale.size_760x427.v1638566437.jpg"
  },
  {
    "id":4,
    "title": "blog 4",
    "desc": "fsdfs sdf sdfsdfsdfadsaea erfaserf لمعالج (CPU) : يعد المعالج قلب جهاز الكمبيوتر وهو الذي يتحكم في جميع المهام التي تشغل جهاز الكمبيوتر. dsdf هامة بما في ذلك: الذاكرة (RAM), المعالج (CPU), الجهدية (power supply), القرص الصلب (hard drive), الشاشة (monitor), الماوس (mouse), اللوحة المفاتيح (keyboard), الصوت (speaker) والشبكة (network). يعمل جهاز الكمبيوتر على تنفيذ الأوامر التي يدخلها المستخدم ويحل العديد من المهام  st ",
    "img": "https://m.media-amazon.com/images/I/718sn7oOcfL._AC_SL1500_.jpg"
  },

]

const Services = () => {
  return (
    <section id='services'>
      <h5>مدونات</h5>
      <h2>Blogs</h2>

      <div className="container services__container">
          {blogs.map((blog) =>
        <article className="service">
          
          
          
          <div className="service__head">
            <h3>{blog.title}</h3>
          </div>

          <div className='service__list'>
          <img className='img_blog' src={blog.img} alt={blog.title}  />
              <p>{blog.desc}</p>
          </div>
        </article>
        )}
        {/* END OF UI/UX */}
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services