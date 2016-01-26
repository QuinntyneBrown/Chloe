using Data.Contracts;
using Dtos;
using Services.Contracts;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Services
{
    public class ComponentService: IComponentService
    {
        public ComponentService(IModernCmsUow uow)
        {
            this.uow = uow;
        }

        public ComponentDto Add(ComponentDto dto)
        {
            throw new NotImplementedException();
        }

        public ICollection<ComponentDto> Get()
        {
            return this.uow.Components
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new ComponentDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IModernCmsUow uow;
        
    }
}
