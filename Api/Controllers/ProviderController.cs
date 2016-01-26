using Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Controllers
{
    public class ProviderController
    {
        public ProviderController(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        protected readonly IModernCmsUow uow;
    }
}