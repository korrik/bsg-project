# -*- coding: utf-8 -*-
from bsg.core import models
from bsg.core.providers import remotingProvider
from django.contrib.auth.models import User, Permission

from bsg.core.crud import *

""" Create ExtDirectCRUD instances for each model"""

BsgExtDirectCRUD(remotingProvider, models.Partner.action(), models.Partner)
BsgExtDirectCRUD(remotingProvider, models.Activities.action(), models.Activities)
BsgExtDirectCRUD(remotingProvider, models.Costs.action(), models.Costs)
BsgExtDirectCRUD(remotingProvider, models.Resources.action(), models.Resources)
BsgExtDirectCRUD(remotingProvider, models.SalesChannels.action(), models.SalesChannels)
BsgExtDirectCRUD(remotingProvider, models.Offers.action(), models.Offers)
BsgExtDirectCRUD(remotingProvider, models.Relationship.action(), models.Relationship)
BsgExtDirectCRUD(remotingProvider, models.Stream.action(), models.Stream)
BsgExtDirectCRUD(remotingProvider, models.Segments.action(), models.Segments)
BsgExtDirectCRUD(remotingProvider, models.Product.action(), models.Product)
BsgExtDirectCRUD(remotingProvider, models.ModelProduct.action(), models.ModelProduct)
BsgExtDirectCRUD(remotingProvider, models.RandD.action(), models.RandD)
BsgExtDirectCRUD(remotingProvider, models.PriceCountry.action(), models.PriceCountry)
BsgExtDirectCRUD(remotingProvider, models.PriceExpansion.action(), models.PriceExpansion)
BsgExtDirectCRUD(remotingProvider, models.ShippingCosts.action(), models.ShippingCosts)
BsgExtDirectCRUD(remotingProvider, models.Factory.action(), models.Factory)
BsgExtDirectCRUD(remotingProvider, models.Representation.action(), models.Representation)
# BsgExtDirectCRUD(remotingProvider, models.PriceCountry.action(), models.PriceCountry)
# BsgExtDirectCRUD(remotingProvider, models.PriceCountry.action(), models.PriceCountry)
# BsgExtDirectCRUD(remotingProvider, models.PriceCountry.action(), models.PriceCountry)
