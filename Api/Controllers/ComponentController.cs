using Data.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    public class ComponentController : ApiController
    {
        public ComponentController(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        protected readonly IModernCmsUow uow;
    }
}
