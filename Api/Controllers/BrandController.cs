using Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/brand")]
    public class BrandController : ApiController
    {        
        public BrandController(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        [Route("get")]
        public string Get()
        {
            return "test";
        }

        protected readonly IModernCmsUow uow;
    }
}
