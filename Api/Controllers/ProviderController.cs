using Data.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Controllers
{
    public class ProviderController
    {
        public ProviderController(ISubscribeToProviderUow uow)
        {
            this.uow = uow;
        }

        protected readonly ISubscribeToProviderUow uow;
    }
}