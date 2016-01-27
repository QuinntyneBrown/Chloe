using Data.Contracts;
using Dtos;
using Services.Contracts;
using System.Linq;
using System.Collections.Generic;
using Models;

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
            var entity = new Provider() { Name = dto.Name };
            this.uow.Providers.Add(entity);
            this.uow.SaveChanges();
            return new ProviderDto(entity);
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
            var entity = uow.Providers.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        protected readonly IModernCmsUow uow;
    }
}
