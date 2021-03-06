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
# BsgExtDirectCRUD(remotingProvider, models.SalesChannels.action(), models.SalesChannels)
# BsgExtDirectCRUD(remotingProvider, models.SalesChannels.action(), models.SalesChannels)
# BsgExtDirectCRUD(remotingProvider, models.SalesChannels.action(), models.SalesChannels)
# BsgExtDirectCRUD(remotingProvider, models.SalesChannels.action(), models.SalesChannels)