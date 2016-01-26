using Data.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    public class PageController : ApiController
    {
        public PageController(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        protected readonly IModernCmsUow uow;
    }
}
