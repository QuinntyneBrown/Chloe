using Data.Contracts;
using Dtos;
using Services.Contracts;
using System;
using System.Linq;
using System.Collections.Generic;
using Models;

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
            var entity = new Component() { Name = dto.Name };
            this.uow.Components.Add(entity);
            this.uow.SaveChanges();
            return new ComponentDto(entity);
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
            var entity = uow.Components.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        protected readonly IModernCmsUow uow;
        
    }
}
