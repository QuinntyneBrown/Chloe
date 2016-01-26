using Data.Contracts;
using System.Web.Http;

namespace Api.Controllers
{
    public class ComponentController : ApiController
    {
        public ComponentController(ISubscribeToProviderUow uow)
        {
            this.uow = uow;
        }

        protected readonly ISubscribeToProviderUow uow;
    }
}
