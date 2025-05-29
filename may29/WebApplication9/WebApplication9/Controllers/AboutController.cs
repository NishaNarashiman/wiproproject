using Microsoft.AspNetCore.Mvc;

namespace WebApplication9.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
