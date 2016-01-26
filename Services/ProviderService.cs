using Data.Contracts;
using Dtos;
using Services.Contracts;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Services
{
    public class ProviderService: IProviderService
    {
        public ProviderService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public ProviderDto Add(ProviderDto dto)
        {
            throw new NotImplementedException();
        }

        public ICollection<ProviderDto> Get()
        {
            return this.uow.Providers
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new ProviderDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IModernCmsUow uow;
    }
}
