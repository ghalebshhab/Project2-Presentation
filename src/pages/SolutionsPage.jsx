import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";

function SolutionsPage({ pageAnimation }) {
  return (
    <motion.section key="solutions" className="page solutions-page" {...pageAnimation}>
      <div className="page-header">
        <h2 className="page-title">الحلول التقنية</h2>
        <p className="page-subtitle">المشاكل المعقدة التي واجهتنا وكيف قمنا بحلها (Technical Solutions)</p>
      </div>

      <div className="solutions-section" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <div className="solutions-list">
          
          <div className="solution-card">
            <div className="problem-area">
              <div className="area-header problem-header">
                <AlertTriangle className="area-icon" />
                <h4>المشكلة: تزاحم الإشعارات بين نوعي المستخدمين</h4>
              </div>
              <p>كيف يمكن تقديم إشعارات تواصل اجتماعي للمستخدم العادي وإشعارات أعمال (تقييمات، عروض) للمالك دون تداخل أو إزعاج؟</p>
            </div>
            <div className="solution-area">
              <div className="area-header">
                <Lightbulb className="area-icon text-yellow" />
                <h4>الحل: نظام إشعارات مزدوج (Dual Notification System)</h4>
              </div>
              <p>بناء شاشات وقواعد بيانات منفصلة تماماً (OwnerNotificationScreen). يتم توجيه الإشعار بناءً على دور المستخدم (Role) وربط كل إشعار برابط عميق (Deep Link) يأخذ المستخدم للإجراء المطلوب فوراً.</p>
            </div>
          </div>

          <div className="solution-card">
            <div className="problem-area">
              <div className="area-header problem-header">
                <AlertTriangle className="area-icon" />
                <h4>المشكلة: أداء الخريطة مع كثرة المواقع والعروض</h4>
              </div>
              <p>تحميل آلاف النقاط (Markers) على الخريطة دفعة واحدة يسبب بطء شديد في واجهة الهاتف (Lag) واستهلاك للبطارية.</p>
            </div>
            <div className="solution-area">
              <div className="area-header">
                <Lightbulb className="area-icon text-yellow" />
                <h4>الحل: التجميع الجغرافي (Clustering) والتحديث اللحظي</h4>
              </div>
              <p>استخدام تقنية Marker Clustering لتجميع المواقع القريبة في أيقونة واحدة قابلة للتمدد عند التكبير (Zoom)، مع جلب البيانات بناءً على إحداثيات الشاشة الحالية فقط (Bounding Box) من خلال Spring Boot.</p>
            </div>
          </div>

          <div className="solution-card">
            <div className="problem-area">
              <div className="area-header problem-header">
                <AlertTriangle className="area-icon" />
                <h4>المشكلة: سرعة جلب صور الأماكن والمستخدمين</h4>
              </div>
              <p>تحميل الصور عالية الدقة لمئات الأماكن والمراجعات يستهلك باقة الإنترنت للمستخدم ويزيد من وقت الانتظار.</p>
            </div>
            <div className="solution-area">
              <div className="area-header">
                <Lightbulb className="area-icon text-yellow" />
                <h4>الحل: التخزين السحابي المُحسن (Firebase Storage & Caching)</h4>
              </div>
              <p>استخدام Firebase Storage لرفع الصور، مع الاعتماد على مكتبات التخزين المؤقت (Caching) في Jetpack Compose مثل (Coil) لضمان تحميل الصورة مرة واحدة فقط وحفظها محلياً، مع ضغط الصور قبل الرفع من الواجهة الخلفية.</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default SolutionsPage;
